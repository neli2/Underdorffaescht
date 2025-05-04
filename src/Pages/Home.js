import React, { useEffect, useState } from "react";
import Section from "../Components/Atoms/Section";
import Text from "../Components/Atoms/Text";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TitleH1 } from "../Components/Atoms/Title";
import { setDocument, streamCollection } from "../firebaseProvider";
import styled from "styled-components";
import {
  SendButton,
  ButtonContent,
  Spinner,
} from "../Components/Organisms/Form/SendButton";
import FormInput from "../Components/Organisms/Form/FormInput";

const sendingStatus = {
  notSent: 0,
  pending: 1,
  sentWithSuccess: 2,
  sentWithError: 3,
};

const ButtonContainer = styled.div`
  position: relative;
  float: right;
`;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = useState(0);
  const [registrations, setRegistrations] = useState(null);
  const [addSnapshots, setAddSnapshots] = useState(null);
  const [modSnapshots, setModSnapshots] = useState(null);
  const [delSnapshots, setDelSnapshots] = useState(null);

  const [form, setform] = useState({
    name: "",
    adult: "",
    children: "",
    toBring: "",
    option1: false,
    option2: false,
  });
  const [formSendingStatus, setFormSendingStatus] = useState(
    sendingStatus.notSent
  );

  const handleFormChange = (name, value) => {
    setform({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    setFormSendingStatus(sendingStatus.pending);
    setDocument("registrations", form)
      .then((res) => {
        setFormSendingStatus(sendingStatus.sentWithSuccess);
        setform({
          name: "",
          adult: "",
          children: "",
          toBring: "",
          option1: false,
          option2: false,
        });
      })
      .catch((err) => {
        console.log("error set document: ", err);
        setFormSendingStatus(sendingStatus.sentWithError)});
  };

  const sortObjects = (obj) => {
    var res = null;

    if (obj !== null) {
      res = Array.from(obj).sort((x, y) => {
        return x.timestamp - y.timestamp;
      });
      res = res.reverse();
    }
    return res;
  };

  useEffect(() => {
    streamCollection(
      "registrations",
      setAddSnapshots,
      setModSnapshots,
      setDelSnapshots
    );
  }, []);

  useEffect(() => {
    if (!registrations) {
      const sortedAddSnap = sortObjects(addSnapshots);
      setRegistrations(sortedAddSnap);
    } else if (!addSnapshots.every((x) => registrations.includes(x))) {
      const combinedArray = Array.from(
        new Set([...addSnapshots, ...registrations])
      );
      setRegistrations(combinedArray);
    }
  }, [addSnapshots, registrations]);

  useEffect(() => {
    if (modSnapshots) {
      modSnapshots.forEach((obj) => {
        var index = null;

        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i].id === obj.id) {
            index = i;
          }
        }
        if (index !== null) {
          let updateFreeObjects = [...registrations];
          updateFreeObjects[index] = obj;
          setRegistrations(updateFreeObjects);
        }
      });
    }
  }, [modSnapshots, registrations]);

  useEffect(() => {
    if (delSnapshots) {
      delSnapshots.forEach((obj) => {
        var index = null;

        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i].id === obj.id) {
            index = i;
          }
        }

        if (index !== null) {
          let updateFreeObjects = [...registrations];
          updateFreeObjects.splice(index, 1);
          setRegistrations(updateFreeObjects);
        }
      });
    }
  }, [delSnapshots, registrations]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function createData(name, content) {
    return { name, content };
  }

  const rows = [
    createData(
      "Name",
      <FormInput
        type="text"
        name="name"
        value={form["name"]}
        setValue={handleFormChange}
      />
    ),
    createData(
      "Anz. Erwachsene",
      <FormInput
        type="text"
        name="adult"
        value={form["adult"]}
        setValue={handleFormChange}
      />
    ),
    createData(
      "Anz. Kinder",
      <FormInput
        type="text"
        name="children"
        value={form["children"]}
        setValue={handleFormChange}
      />
    ),
    createData(
      "mitbringen",
      <FormInput
        type="text"
        name="toBring"
        value={form["toBring"]}
        setValue={handleFormChange}
        multiline={true}
      />
    ),
  ];

  const getFormContent = () => {
    switch (formSendingStatus) {
      case 1:
        return (
          <ButtonContainer>
            <SendButton onClick={handleSubmit} aria-label="Lädt">
              <ButtonContent>
                <Spinner />
              </ButtonContent>
            </SendButton>
          </ButtonContainer>
        );
      case 2:
        return (
          <Text marginTop="10px" color="#32a852">
            erfolgreich gespeichert, vielen Dank
          </Text>
        );
      case 3:
        return (
          <Text marginTop="10px">
            da ging leider was schief, versuche es bitte nochmal
          </Text>
        );
      default:
        return (
          <ButtonContainer>
            <SendButton onClick={handleSubmit} aria-label="Senden">
              <ButtonContent>
                <Text size="14px" color="#ffffff">
                  speichern
                </Text>
              </ButtonContent>
            </SendButton>
          </ButtonContainer>
        );
    }
  };

  return (
    <>
      <Section
        pt="100px"
        pb="50px"
        ptTablet="80px"
        ptMobile="80px"
        pbMobile="0px"
        width="80%"
        widthMobile="90%"
      >
        <TitleH1>Altishauser Unterdorffest</TitleH1>
        <Text>
          Wann: 16. August 2025, nur bei guter Witterung
        </Text>
        <Text>
          Wo: Frühackerweg Altishausen
        </Text>
        <Text>
          Zeit: Ab 15:30 Uhr
        </Text>
        <br/>
        <br/>
        <Text>
          Herzlichen Dank für deine/eure Anmeldung zur 2. Auflage unseres Dorffestes.
        </Text>
        <Text>
          Wir freuen uns, dass du/ihr dabei seid.
        </Text>
        <Text>
          Für dieses Jahr haben wir uns entschieden einen Beitrag von CHF 5. - pro Erwachsene Person zu erheben.
          Dafür sind alle nicht alkoholischen Getränke für alle (inkl. Kinder) gratis.
        </Text>
        <br/>
        <br/>
        <Text>
          Vielen Dank auch für deinen/euren Beitrag ans Buffet - sei es ein Salat oder einen leckeren Dessert.
          Wir freuen uns auf ein fröhliches Fest mit euch - mit guter Stimmung und tollen Begegnungen.
        </Text>
        <br/>
        <Text>Wir freuen uns auf Euch </Text>
        <Text>Claudia, Jenni & Sabrina</Text>
      </Section>
      <Section
        pt="100px"
        pb="100px"
        ptTablet="80px"
        ptMobile="60px"
        pbMobile="80px"
        width="80%"
        widthMobile="90%"
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Mitbringen Tabelle"
          >
            <Tab label="Bringen" {...a11yProps(0)} />
            <Tab label="Übersicht" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Text
            marginBottomMobile="20px"
            marginTopMobile="10px"
            marginTop="20px"
            marginBottom="30px"
            size="18px"
          >
            Wie viele seit ihr und was möchtest du / möchtet ihr mitbringen?
          </Text>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 0 }} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.content}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {getFormContent()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 0 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Anz. Erwachsene</TableCell>
                  <TableCell>Anz. Kinder</TableCell>
                  <TableCell>Mitbringen</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {registrations &&
                  registrations.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.adult}</TableCell>
                      <TableCell>{row.children}</TableCell>
                      <TableCell>{row.toBring}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
      </Section>
    </>
  );
};

export default Home;

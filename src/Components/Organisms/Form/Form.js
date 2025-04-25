import React, { useState } from "react";
import { SendButton, ArrowRight, ButtonContent, Spinner } from "./SendButton";

const sendingStatus = {
  notSent: 0,
  pending: 1,
  sentWithSuccess: 2,
  sentWithError: 3,
};

const Form = (props) => {
  const [form, setform] = useState({
    name: "",
    adult: "",
    children: "",
    toBring: "",
  });
  const [showError, setShowError] = useState(false);
  const [formSendingStatus, setFormSendingStatus] = useState(
    sendingStatus.notSent
  );

  const handleFormChange = (name, value) => {
    setShowError(false);
    setform({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (
      form.name === "" ||
      form.adult === "" ||
      form.children === "" ||
      form.toBring === ""
    ) {
      setShowError(true);
    } else {
      setFormSendingStatus(sendingStatus.pending);
      // doc create
    }
  };

  const checkFieldError = (prop) => {
    return showError && form[prop] === "";
  };

  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      const value = form[child.props.name];
      return React.cloneElement(child, {
        value: value,
        setValue: handleFormChange,
        showError: checkFieldError(child.props.name),
      });
    }
    return child;
  });

  const getFormContent = () => {
    switch (formSendingStatus) {
      case 1:
        return (
          <>
            {childrenWithProps}
            <SendButton onClick={handleSubmit} aria-label="Lädt">
              <ButtonContent>
                <Spinner />
              </ButtonContent>
            </SendButton>
          </>
        );
      case 2:
        return props.successMessage;
      case 3:
        return props.errorMessage;
      default:
        return (
          <>
            {childrenWithProps}
            <SendButton onClick={handleSubmit} aria-label="Senden">
              <ButtonContent>
                {props.sendButtonText}
                <ArrowRight />
              </ButtonContent>
            </SendButton>
          </>
        );
    }
  };

  return (
    <div>
      {props.title}
      {getFormContent()}
    </div>
  );
};

export default Form;

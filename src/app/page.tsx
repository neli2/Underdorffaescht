"use client";

import React, { useEffect, useState } from "react";
import { setDocument, streamCollection } from "@/lib/firebaseProvider";
import styles from "./page.module.css";

const sendingStatus = {
  notSent: 0,
  pending: 1,
  sentWithSuccess: 2,
  sentWithError: 3,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"bringen" | "uebersicht">("bringen");
  const [registrations, setRegistrations] = useState<any[]>([]);
  
  const [form, setForm] = useState({
    name: "",
    adult: "",
    children: "",
    toBring: "",
  });
  
  const [formSendingStatus, setFormSendingStatus] = useState(sendingStatus.notSent);

  useEffect(() => {
    const unsubscribe = streamCollection(
      "registrations",
      (adds: any[]) => {
        setRegistrations((prev) => {
          const newArray = [...prev];
          adds.forEach((item) => {
            if (!newArray.some((x) => x.id === item.id)) {
              newArray.push(item);
            }
          });
          return newArray.sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds);
        });
      },
      (mods: any[]) => {
        setRegistrations((prev) => {
          const newArray = [...prev];
          mods.forEach((item) => {
            const index = newArray.findIndex((x) => x.id === item.id);
            if (index !== -1) newArray[index] = item;
          });
          return newArray;
        });
      },
      (dels: any[]) => {
        setRegistrations((prev) => {
          const newArray = [...prev];
          dels.forEach((item) => {
            const index = newArray.findIndex((x) => x.id === item.id);
            if (index !== -1) newArray.splice(index, 1);
          });
          return newArray;
        });
      }
    );
    
    return () => unsubscribe();
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) return; // Basic validation
    
    setFormSendingStatus(sendingStatus.pending);
    setDocument("registrations", form)
      .then(() => {
        setFormSendingStatus(sendingStatus.sentWithSuccess);
        setForm({
          name: "",
          adult: "",
          children: "",
          toBring: "",
        });
        setTimeout(() => setFormSendingStatus(sendingStatus.notSent), 3000);
      })
      .catch((err: any) => {
        console.error("error set document: ", err);
        setFormSendingStatus(sendingStatus.sentWithError);
      });
  };

  return (
    <div className={styles.container}>
      <section className={`${styles.heroSection} glass-panel animate-fade-in`}>

        
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <strong>Wann:</strong> 16. August 2025, nur bei guter Witterung
          </div>
          <div className={styles.infoItem}>
            <strong>Wo:</strong> Frühackerweg Altishausen
          </div>
          <div className={styles.infoItem}>
            <strong>Zeit:</strong> Ab 15:30 Uhr
          </div>
        </div>

        <div className={styles.textContent}>
          <p>Herzlichen Dank für deine/eure Anmeldung zur 2. Auflage unseres Dorffestes.</p>
          <p>Wir freuen uns, dass du/ihr dabei seid.</p>
          <p>
            Für dieses Jahr haben wir uns entschieden einen Beitrag von CHF 5. - pro Erwachsene Person zu erheben.
            Dafür sind alle nicht alkoholischen Getränke für alle (inkl. Kinder) gratis.
          </p>
          <p>
            Vielen Dank auch für deinen/euren Beitrag ans Buffet - sei es ein Salat oder einen leckeren Dessert.
            Wir freuen uns auf ein fröhliches Fest mit euch - mit guter Stimmung und tollen Begegnungen.
          </p>
          <div className={styles.signature}>
            <p>Wir freuen uns auf Euch</p>
            <p><strong>Claudia, Jenni & Sabrina</strong></p>
          </div>
        </div>
      </section>

      <section className={`${styles.tabsSection} glass-panel animate-fade-in stagger-1`}>
        <div className={styles.tabsHeader}>
          <button 
            className={`${styles.tabBtn} ${activeTab === "bringen" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("bringen")}
          >
            Bringen
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === "uebersicht" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("uebersicht")}
          >
            Übersicht
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "bringen" ? (
            <div className="animate-fade-in">
              <h2 className={styles.formTitle}>Wie viele seid ihr und was möchtest du / möchtet ihr mitbringen?</h2>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input required className="input-field" type="text" name="name" value={form.name} onChange={handleFormChange} />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Anz. Erwachsene</label>
                    <input className="input-field" type="number" name="adult" value={form.adult} onChange={handleFormChange} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Anz. Kinder</label>
                    <input className="input-field" type="number" name="children" value={form.children} onChange={handleFormChange} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Mitbringen</label>
                  <textarea className="input-field" rows={4} name="toBring" value={form.toBring} onChange={handleFormChange} />
                </div>

                <div className={styles.formActions}>
                  {formSendingStatus === sendingStatus.pending && (
                    <button type="button" disabled className="btn btn-primary">
                      <div className="spinner" />
                    </button>
                  )}
                  {formSendingStatus === sendingStatus.sentWithSuccess && (
                    <p className={styles.successMsg}>Erfolgreich gespeichert, vielen Dank!</p>
                  )}
                  {formSendingStatus === sendingStatus.sentWithError && (
                    <p className={styles.errorMsg}>Da ging leider was schief, versuche es bitte nochmal.</p>
                  )}
                  {formSendingStatus === sendingStatus.notSent && (
                    <button type="submit" className="btn btn-primary">Speichern</button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className={styles.tableResponsive}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Erwachsene</th>
                      <th>Kinder</th>
                      <th>Mitbringen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((row) => (
                      <tr key={row.id || row.name}>
                        <td data-label="Name"><strong>{row.name}</strong></td>
                        <td data-label="Erwachsene">{row.adult}</td>
                        <td data-label="Kinder">{row.children}</td>
                        <td data-label="Mitbringen">{row.toBring}</td>
                      </tr>
                    ))}
                    {registrations.length === 0 && (
                      <tr>
                        <td colSpan={4} className={styles.emptyState}>Noch keine Anmeldungen vorhanden.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

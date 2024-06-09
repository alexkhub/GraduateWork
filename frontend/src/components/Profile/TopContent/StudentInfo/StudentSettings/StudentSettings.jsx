import React, { useState } from "react";

import PrimarySettings from "./PrimarySettings/PrimarySettings";
import ChangeEmail from "./ChangeEmail/ChangeEmail";
import ChangePassword from "./ChangePassword/ChangePassword";

function StudentSettings(props) {
  const [modalWindow, changeModalWindow] = useState(false);
  const [primarySettingsOpen, setPrimarySettingsOpen] = useState(true);
  const [changeEmailOpen, setChangeEmailOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  function openChangeEmail() {
    setChangeEmailOpen(!changeEmailOpen);
    setPrimarySettingsOpen(!primarySettingsOpen);
  }

  function openChangePassword() {
    setChangePasswordOpen(!changePasswordOpen);
    setPrimarySettingsOpen(!primarySettingsOpen);
  }

  return (
    <>
      <i
        onClick={() => {
          changeModalWindow(!modalWindow);
        }}
        className="fas fa-cogs"
      ></i>
      <div
        className={
          modalWindow
            ? "student-settings-background__show"
            : "student-settings-background__hidden"
        }
      >
        <div className="student-settings">
          <i
            onClick={() => {
              changeModalWindow(!modalWindow);
            }}
            className="fas fa-times"
          ></i>
          <p>Настройки</p>
          <PrimarySettings
            changeModalWindow={changeModalWindow}
            modalWindow={modalWindow}
            userSlug={props.userSlug}
            setPrimarySettingsOpen={setPrimarySettingsOpen}
            primarySettingsOpen={primarySettingsOpen}
            openChangeEmail={openChangeEmail}
            openChangePassword={openChangePassword}
          />
          <ChangeEmail
            openChangeEmail={openChangeEmail}
            setChangeEmailOpen={setChangeEmailOpen}
            changeEmailOpen={changeEmailOpen}
          />
          <ChangePassword
            openChangePassword={openChangePassword}
            setChangePasswordOpen={setChangePasswordOpen}
            changePasswordOpen={changePasswordOpen}
          />
        </div>
      </div>
    </>
  );
}

export default StudentSettings;

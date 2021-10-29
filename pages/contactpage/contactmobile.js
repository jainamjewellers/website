import styles from "./contactusMobile.module.css";
import { useEffect, useState, useReducer } from "react";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { submitForm } from "../../actions/append";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.length > 3 };
  }
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value > 3 };
  }
  return { value: "", isValid: false };
};

export default function Contact(props) {
  useEffect(() => {}, []);

  const [isopen, open] = useState(false);
  const [expanded, exPand] = useState(false);

  const [fullname, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value:"",
    isValid: false
  });

  const handleEmail = (e) => {
    dispatchEmail({type:"USER_INPUT",val:e.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const [mob, setMob] = useState("");
  const handleMob = (e) => {
    setMob(e.target.value);
  };

  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const [selectedValue, selectValue] = useState("");
  const handleRadioChange = (e) => {
    selectValue(e.target.value);
  };

  const [options, setOptions] = useState([]);
  const handleCheckBox = async (e) => {
    console.log(e);
    //let arr = options
    let arr =
      localStorage.getItem("options") != null
        ? JSON.parse(localStorage.getItem("options"))
        : [];
    if (arr.includes(e)) {
      arr = arr.filter((element) => element != e);
      console.log("removed");
    } else {
      arr.push(e);
      console.log("put");
    }
    await setOptions(arr);
    console.log(arr);
    localStorage.setItem("options", JSON.stringify(arr));
  };
  const ischecked = (val) => {
    return options.includes(val);
  };
  const handleSubmit = () => {
    exPand(false);
    setName("");
    dispatchEmail({type:"USER_INPUT",val:""})
    selectValue("");
    setOptions([]);
    alert("Your response has been recorded");
    submitForm([fullname, emailState.value, selectedValue, options.toString()]);
    localStorage.removeItem("options");
  };
  return (
    <div>
      <div className={styles.main_contactus_wrapper}>
        <div className={styles.col_flex_wrapper}>
          <div className={styles.col_flex_wrapper_inner}>
            <div className={styles.info_section_heading}>
              Getting in touch is easy!
            </div>

            <div style={{ marginBottom: "10px" }}>
              <input
                className={styles.name_form_input}
                onChange={handleNameChange}
                id="standard-basic"
                placeholder="Full Name"
              />
            </div>

            <div>
              <input
                className={styles.email_form_input}
                value={emailState.value}
                onChange={handleEmail}
                onBlur={validateEmailHandler}
                placeholder="Phone Number / Email"
              />
            </div>

            <div className={styles.radio_wrapper}>
              <div style={{ justifyContent: "center" }} className="flexy_boi">
                <FormControlLabel
                  checked={selectedValue === "buyer"}
                  onChange={handleRadioChange}
                  control={
                    <Radio 
                      color="default"
                      sx={{
                        color: "#000",
                        fontSize: "11pt",
                        lineHeight: "11pt",
                        "&$checked": {
                          color: "#000",
                        },
                        '&.Mui-checked': {
                          color: '#000',
                        },
                      }} />}
                  value="buyer"
                  label="I'm a buyer"
                  name="radio-button-demo"
                />
                <FormControlLabel
                  checked={selectedValue === "seller"}
                  onChange={handleRadioChange}
                  control={<Radio 
                    color="default"
                    sx={{
                      color: "#000",
                      fontSize: "11pt",
                      lineHeight: "11pt",
                      "&$checked": {
                        color: "#000",
                      },
                      '&.Mui-checked': {
                        color: '#000',
                      },
                    }} />}
                  value="seller"
                  label="I'm a seller"
                  name="radio-button-demo"
                />
              </div>
            </div>

            <div className={styles.form_content_wrapper}>
              <div className={styles.form_label}>{`I'm Interested in`}</div>
              <div className={styles.form_options_list_wrapper}>
                {checkBoxOptions.map((e, i) => {
                  return (
                    <div className={styles.checkbox_single_element} key={i}>
                      <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        checked={ischecked(e)}
                        onClick={()=>handleCheckBox(e)}
                        color="primary"
                        sx={{
                          color: '#000',
                          '&.Mui-checked': {
                            color: '#000',
                          },
                        }}
                      />
                      <span className={styles.checkbox_label}>{e}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className={styles.submit_Button}
              onClick={() => {
                handleSubmit();
              }}
            >
              {`Submit`}
            </button>
          </div>

          {/*  */}

          <div className={styles.address_Table}>
            <div className={styles.address_details}>
              <div className={styles.address_row}>
                <div className={styles.form_section_heading}>
                  Head Office - <strong>Mumbai</strong>
                </div>
              </div>
              <div className={styles.address_row}>
                <div
                  className={styles.full_address}
                >{`Building No. 18/A, Room No. 8, 4th Floor 1st Bhoiwada, Bhuleshwar Road , Mumbai, Maharashtra 400002`}</div>
              </div>
              <div className={`${styles.address_row} ${styles.address_rows}`}>
                <div className={`${styles.single_contact_detail}`}>
                  <div>
                    <img src="/img/svg/whatsapp_vector.svg" />
                  </div>
                  <div className={`${styles.single_contact_detail_middle_row}`}>
                    <a
                      href={`https://api.whatsapp.com/send/?phone=917045180822&text&app_absent=0`}
                    >
                      +91 7045180822
                    </a>
                  </div>
                  <div
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/jainamjewellersmumbai"
                      )
                    }
                  >
                    <img src="/img/svg/facebook_vector.svg" />
                  </div>
                </div>
                <div className={`${styles.single_contact_detail}`}>
                  <div>
                    <img src="/img/svg/call_vector.svg" />
                  </div>
                  <div className={`${styles.single_contact_detail_middle_row}`}>
                    +91 9321180822
                  </div>
                  <div
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/jainam-jewellers"
                      )
                    }
                  >
                    <img src="/img/svg/linkedin_vector.svg" />
                  </div>
                </div>

                <div className={`${styles.single_contact_detail}`}>
                  <div>
                    <img src="/img/svg/email_vector.svg" />
                  </div>
                  <div className={`${styles.single_contact_detail_middle_row}`}>
                    <a href="mailto:contact@jainamjewelers.in">
                      contact@jainamjewelers.in
                    </a>
                  </div>
                  <div
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/jainamjewellersmumbai"
                      )
                    }
                  >
                    <img src="/img/svg/instagram_vector.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.map_section}>
              {/* <SimpleMap/> */}
              <iframe
                allowFullScreen={true}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5022301860713!2d72.82839851489919!3d18.95341458715845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5cbadc4d69%3A0x861d1967b93e067e!2sJainam%20Jewellers!5e0!3m2!1sen!2sin!4v1621784029012!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.info_section}>
          <div className={styles.heading}></div>
          <div className="flexy_boi">
          </div>
          <div style={{ height: "150px" }}>{` `}</div>
        </div>
      </div>
    </div>
  );
}

const checkBoxOptions = [
  "Mangalsutra (22 Karat)",
  "Solid Nawabi Chains (22 Karat)",
  "Hollow Nawabi Chains (22 Karat)",
  "Hand-made Chains (22 Karat)",
  "Rudraksh Chains (22 Karat)",
  "Tulshi Chains (22 Karat)",
  "Bracelets",
  "Gold Coins (24 Karat)",
  "Evaluating or Selling ornaments",
];

/* const checkBoxOptions = [
    "Mangalsutra",
    "Solid Nawabi Chains",
    "Hollow Nawabi Chains",
    "Hand-made Chains",
    "Rudraksh Chains",
    "Tulshi Chains",
    "Bracelets",
    "Gold Coins",
    "Evaluating or Selling ornaments"
] */

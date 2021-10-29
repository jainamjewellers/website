import styles from "./BlogMobileStyle.module.css";
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useState,useEffect } from "react";

export default function BlogPageMobile(props) {
  const [checkboxObject, checkBoxSet] = useState({})
  const handleCheckBox = (index) => {
    let tempCheckbox = checkboxObject;
    tempCheckbox[`item_${index}`] = !tempCheckbox[`item_${index}`]
    checkBoxSet(tempCheckbox)
  };
  useEffect(()=>{

  },[])

  const BlogPost = (props) =>{
    const {element,index,handleCheckBox} = props
    const [checked, setChecked] = useState(Boolean(checkboxObject[`item_${index}`]));
    const handleChange = () => {
      console.log("checkboxObject[`item_${index}`]",checkboxObject[`item_${index}`])
      handleCheckBox(index);
      setChecked(!Boolean(checkboxObject[`item_${index}`]))
    };
    return (
      <div className={styles.innerCardWrapper}>
        <img 
        src={`https://picsum.photos/450/300?random=${index + 1}`}
        onError={e => {e.target.onerror = null;e.target.src = `https://picsum.photos/450/300?random=${index + 1}`;}}
        />
        <div className={styles.titleLabelClass}>
          <div>{element.title}</div>
          <div className={styles.iconButtons}>
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon />}
              checked={checked}
              onClick={()=>handleChange()}
              inputProps={{ 'aria-label': 'controlled' }}
              color="primary"
            />
            <Checkbox
              icon={<ShareIcon />}
              checkedIcon={<ShareIcon />}
              checked={false}
              onClick={handleCheckBox}
              color="primary"
            />
          </div>
        </div>
        <div className={styles.dateLabelClass}>{element.date}</div>
      </div>
    );
  }
  return (
    <div className={styles.outerWrapper}>
      {postList.map((element, index) => {
        return (
        <BlogPost
          element={element}
          index={index}
          key={index}
          handleCheckBox={handleCheckBox}
          />
        );
      })}
    </div>
  );
}

let postList = [
  { title: "This is a blog title", img: "", date: "May 14, 2021" },
  { title: "This is a blog title", img: "", date: "May 14, 2021" },
  { title: "This is a blog title", img: "", date: "May 14, 2021" },
  { title: "This is a blog title", img: "", date: "May 14, 2021" },
  { title: "This is a blog title", img: "", date: "May 14, 2021" },
  { title: "This is a blog title", img: "", date: "May 14, 2021" },
];

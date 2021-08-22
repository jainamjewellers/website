import styles from "./BlogMobileStyle.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
export default function BlogPageMobile(props) {
  const handleCheckBox = () => {
    console.log("Heart Clicked");
  };
  return (
    <div className={styles.outerWrapper}>
      {postList.map((element, index) => {
        return (
          <div key={index} className={styles.innerCardWrapper}>
            <img src={`https://picsum.photos/450/300?random=${index + 1}`} />
            <div className={styles.titleLabelClass}>
              <div>{element.title}</div>
              <div className={styles.iconButtons}>
                <Checkbox
                  icon={<FavoriteBorderIcon />}
                  checkedIcon={<FavoriteIcon />}
                  checked={false}
                  onClick={handleCheckBox}
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

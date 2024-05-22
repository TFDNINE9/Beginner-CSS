import React from "react";
import styles from "../styles/Home.module.css";

function Homepage() {
  return (
    <div>
      <div className={styles.appBar}>
        <h1>BEGIN-RB</h1>
        <div className={styles.appBar_menu}>
          <div className={styles.homeMenu}>
            <p>Home</p>
            <div className={styles.subHomeMenu}>
              <div className={styles.subHomeMenu_p}>
              <p>Menu1</p>
              <div className={styles.subHomeMenu_p1}>
                <p>Menu1title</p>
                <p>Menu1title</p>
              </div>
            </div>
              <p className={styles.subHomeMenu_p}>menu2</p>
            </div>
          </div>
          <p>Menu</p>
          <p>Award</p>
          <p>Gallery</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className={styles.appBar_right}>
          <p>Login/Register</p>
          <p>Book table</p>
        </div>
      </div>
      <div className={styles.foodContent}>
        <div className={styles.foodContent_left}>
          <p className={styles.foodContent_left_title}>
            Select the new flavour meal
          </p>
          <p className={styles.foodContent_left_title_key}>
            The Key To Find Dining
          </p>
          <p className={styles.foodContent_left_title2}>
            Creating a fine dining atmosphere is all about the details. This
            goes well beyond music, lighting, and art on the walls. Many fine
            dining
          </p>
          <p className={styles.foodContent_left_button}>Export Menu</p>
        </div>
        <div className={styles.foodContent_right}>
          <img src="/images/WhatsApp Image 2022-05-01 at 12.40.17 (1).jpeg"></img>
        </div>
      </div>
      <div className={styles.drinkContent}>
        <div className={styles.drinkContent_left}>
          <img
            className={styles.drinkContent_left_img}
            src="/images\WhatsApp Image 2022-05-01 at 12.40.16.jpeg"
          ></img>
        </div>

        <div className={styles.drinkContent_right}>
          <p className={styles.drinkContent_right_title}>
            Select the new flavour drink
          </p>
          <p className={styles.drinkContent_right_title_key}>
            Find Your Drink To Enjoy
          </p>
          <p>
            Start your search. The Drinkaware site has a range of tools, advice
            and support to help you make better choices about drinking
          </p>
          <p className={styles.foodContent_left_button}>Export Menu</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

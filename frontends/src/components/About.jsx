import styles from "./about.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <h3>The About Us!</h3>
      <div className={styles.school}>
        <h4>HUKPOLY</h4>
        <p>
          Stands for Hassan Usman Katsina Polytechnic. it is a Polytechnic
          institution located in Katsina State, Nigeria. Here are some key facts
          about <span>HUKPOLY</span>
        </p>

        <h4>History</h4>

        <p>
          Hassan Usman Katsina Polytechnic was established in 1983 as a result
          of the merger between the Katsina College of Arts and Science and the
          Government Technical College, Katsina.
        </p>

        <h4>Academic Programs</h4>
        <p>HUKPOLY offers a various academic programs in field such as:</p>
        <ul>
          <li>
            <b>Engineering:</b> <i>e.g. Civil, Electrical,Mechanical</i>
          </li>
          <li>
            <b>Science:</b> <i>e.g. Computer Science, Biology, Chemistry</i>
          </li>
          <li>
            <b>Business and Management:</b>{" "}
            <i>e.g. Accounting, Business, Administration</i>
          </li>
          <li>
            <b>Engineering:</b> <i>e.g. Civil, Electrical,Mechanical</i>
          </li>
          <li>
            <b>Environmental Studies:</b>{" "}
            <i>e.g. Urban and Regional Planning</i>
          </li>
        </ul>

        <h4>Campuses</h4>
        <p>The Polytechnic has two campuses:</p>
        <ul>
          <li>The main campus is located in Katsina</li>
          <li>The second campus is located in Dutsin-ma</li>
        </ul>
        <h4>Facilites</h4>
        <p>The Polytechnic has various facilities, including:</p>
        <ul>
          <li>Libraries</li>
          <li>Laboratories</li>
          <li>Workshops</li>
          <li>Lecture Theaters</li>
          <li>Hostels for students</li>
          <li>Staff quarters</li>
        </ul>

        <h4>Accreditation</h4>
        <p>HUKPOLY is a accredited by the National Board for Technical Education (NBTE) and recognized
          the Federal Government of Nigeria 
        </p>

        <h4>Mission</h4>
        <p>The Polytechnic's mission is to provide quality technical and vocational education, traning, 
          and research that meed the need of the society.</p>

          <h4>Vision</h4>
          <p>HUKPOLY aimas to become a leading institution in technological education and innovation</p>
      </div>
    </div>
  );
}

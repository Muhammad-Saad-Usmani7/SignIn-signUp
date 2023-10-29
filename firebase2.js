document.getElementById("login-form").addEventListener('submit',(event)=>{
  event.preventDefault();
})

const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDYeLTIzmDFkuzxDPwb-vZ_bnBbWJYciNk",
  authDomain: "fire-base-authentication-3db45.firebaseapp.com",
  projectId: "fire-base-authentication-3db45",
  storageBucket: "fire-base-authentication-3db45.appspot.com",
  messagingSenderId: "624357630690",
  appId: "1:624357630690:web:fc2dddbf787770de7634bb",
  measurementId: "G-HWBB77MFE9"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();


const signup = ()=>{
   
  const email = document.getElementById("one").value;
  const password = document.getElementById("two").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    
  })
  .catch((error) => {

    console.log(error);

  });
}

const Login = ()=>{
  const email = document.getElementById("one").value;
  const password = document.getElementById("two").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    location.replace("welcome.html");
  })
  .catch(() => {
    const alerts = document.getElementById("alrt");
    alerts.style.display = "block";
  });
}

// const alerts = document.getElementById("alrt");
// const closee = document.getElementById("closealrt");
// closee.addEventListener("click",()=>{
//   alerts.style.display = "none";
// })

const foo2 = ()=>{
  const alerts = document.getElementById("alrt");
const closee = document.getElementById("closealrt");
alerts.style.display = "none";

}

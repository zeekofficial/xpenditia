auth.onAuthStateChanged(user=>{
  if(user){
    loadUser(user.uid);
  }else{
    show("auth");
  }
});

function login(){
  auth.signInWithEmailAndPassword(email.value,password.value)
    .catch(e=>authMsg.innerText=e.message);
}

function register(){
  auth.createUserWithEmailAndPassword(email.value,password.value)
    .catch(e=>authMsg.innerText=e.message);
}

function show(id){
  ["auth","family","app"].forEach(x=>document.getElementById(x).classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

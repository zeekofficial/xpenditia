let currentUser;
let familyId;

function loadUser(uid){
  currentUser = uid;
  db.collection("users").doc(uid).get().then(doc=>{
    if(!doc.exists || !doc.data().familyId){
      show("family");
    }else{
      familyId = doc.data().familyId;
      show("app");
      loadTransactions();
    }
  });
}

function createFamily(){
  const name = familyName.value;
  const code = "XP-" + Math.random().toString(36).substring(2,7).toUpperCase();

  db.collection("families").add({
    name, inviteCode:code, members:[currentUser]
  }).then(doc=>{
    familyId = doc.id;
    db.collection("users").doc(currentUser).set({familyId},{merge:true});
    alert("Invite code: "+code);
    show("app");
    loadTransactions();
  });
}

function joinFamily(){
  db.collection("families").where("inviteCode","==",inviteCode.value)
    .get().then(snap=>{
      if(snap.empty) return alert("Invalid code");
      snap.forEach(doc=>{
        familyId = doc.id;
        doc.ref.update({members:firebase.firestore.FieldValue.arrayUnion(currentUser)});
        db.collection("users").doc(currentUser).set({familyId},{merge:true});
        show("app");
        loadTransactions();
      });
    });
}

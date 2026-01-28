function addTransaction(){
  db.collection("transactions").add({
    familyId,
    desc:desc.value,
    amount:+amount.value,
    category:category.value,
    person:person.value,
    createdAt:Date.now()
  });
}

function loadTransactions(){
  db.collection("transactions")
    .where("familyId","==",familyId)
    .onSnapshot(snap=>{
      tx.innerHTML="";
      const per={};
      snap.forEach(doc=>{
        const d=doc.data();
        per[d.person]=(per[d.person]||0)+d.amount;
        tx.innerHTML+=`
          <tr>
            <td>${d.desc}</td>
            <td>${d.amount}</td>
            <td>${d.person}</td>
            <td><button onclick="doc.ref.delete()">X</button></td>
          </tr>`;
      });
      drawChart(per);
    });
}

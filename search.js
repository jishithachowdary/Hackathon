function createMyElement(elementname,classname=" ",id=" "){
    var ele=document.createElement(elementname);
    ele.setAttribute('id',id);
    ele.setAttribute('class',classname);
    return ele;
}
async function foo(){
    var value=document.querySelector('input[name="check"]:checked').value;
    var item = document.getElementById("my");
    if(value=="username"){
        document.getElementById("inusername1").value="";
        item.parentNode.removeChild(item);
        var username=document.getElementById("inusername").value;
        document.getElementById("inrepository").value="";
        var div=createMyElement("div");
            div.setAttribute('id',"my");
        let p=createMyElement("div");
            let h=createMyElement("h3");
            h.append("REPOSITORIES");
            p.append(h);
            div.append(p);
            let result=await fetch("https://api.github.com/users/"+username+"/repos");
            let data=await result.json();
            for( i=0;i<data.length;i++){
                var s_name=data[i].name;
                var created_by="created by "+data[i].owner.login;
                var date=data[i].pushed_at;
                date=date.substring(0,10);
                var card=createMyElement("div","card mt-3 mb-3 border-primary");
                var s_card=createMyElement("a","section-card");
                s_card.setAttribute('href',data[i].html_url);
                var t_card=createMyElement("div","titlecard");
                var d_card=createMyElement("div","date-card");
                s_card.append(s_name);
                t_card.append(created_by);
                d_card.append(date);
                card.append(s_card,t_card,date);
                div.append(card);
                document.getElementById("div").append(div);
        }
    }
    else{
        document.getElementById("inusername").value="";
        item.parentNode.removeChild(item);
        var username=document.getElementById("inusername1").value;
        var repository=document.getElementById("inrepository").value;
            var div=createMyElement("div");
            div.setAttribute('id',"my");
        let p=createMyElement("div");
            let h=createMyElement("h3");
            h.append("REPOSITORIES");
            p.append(h);
            div.append(p);
            let result=await fetch("https://api.github.com/repos/"+username+"/"+repository+"");
            let data=await result.json();
                var s_name=data.name;
                var created_by="created by "+data.owner.login;
                var date=data.pushed_at;
                date=date.substring(0,10);
                var card=createMyElement("div","card mt-3 mb-3 border-primary");
                var s_card=createMyElement("a","section-card");
                s_card.setAttribute('href',data.html_url);
                var t_card=createMyElement("div","titlecard");
                var d_card=createMyElement("div","date-card");
                s_card.append(s_name);
                t_card.append(created_by);
                d_card.append(date);
                card.append(s_card,t_card,date);
                div.append(card);
                document.getElementById("div").append(div);

    
    
    }
    

}
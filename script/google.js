let countrydata = JSON.parse(localStorage.getItem("country"));

function displayData(filterData){
    // console.log(filterData[0].countryName);
    document.querySelector("#myDropdown").innerHTML="";

    filterData.map(function(elem,index){
        console.log(elem.countryName)
        var pro1 = document.createElement("a");
        pro1.innerText = elem.countryName;
        document.querySelector("#myDropdown").append(pro1);
    });
}

//----------------------------------Search

document.querySelector(".searchbar").addEventListener("keyup",search)

function search() {
  let value = document.querySelector(".searchbar").value;
  let s1 = value[0].toUpperCase();
  let s2 = value.slice(1,value.length);
  value = s1+s2;
//   console.log(value);
  let filterData = countrydata.filter(function (el) {
    return el.countryName.includes(value);
  });
  displayData(filterData);
}
var app = new Vue({
  el: '#app',
  data: {
    cities: [],
    prefix: '',
  },
  methods: {
    fetchREST() {
      console.log("In Fetch " + this.prefix);
      var url = "http://localhost:3000/getcity?q=" + this.prefix;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((citylist) => {
          console.log("CityList");
          console.log(citylist);
          this.cities = [];
          for (let i = 0; i < citylist.length; i++) {
            console.log(citylist[i].city);
            this.cities.push({ name: citylist[i].city });
          };
          console.log("Got Citylist");
        });
    },
  },
});

import axios from "axios";

export const CountryMixin = {
  data() {
    return {
      //Base api url used to fetch country data
      apiUrl: "https://restcountries.eu/rest/v2",
      //Api Status variables
      loading: false,
      errored: false,
      done: false,
      //Error string
      errorMsg: "",
    };
  },
  methods: {
    async fetchCountryData() {
      //Reseting api status variables
      this.loading = true;
      this.errored = false;
      this.done = false;
      try {
        let response = await axios.get(
          `${this.apiUrl}/all?fields=name;capital;flag`
        );
        //If request successfull
        if (response.status == 200) {
          //Filtered Country Data
          let countryData = [];
          let data = response.data;
          //Looping according to limit amount
          // for(let i = 0 ; i < limit ; i++){
          //Get a random number between 0 and total api records limit
          // let randomNumber = this.generateRandomNumber(0,data.length);
          //Push that record at index equal to random Number
          // }
          data.forEach(record => {
              countryData.push(record);
          });
          //Data processing done
          this.done = true;
          //Return filtered Country Data
          return countryData;
        }
      } catch (err) {
        this.errored = true;
        this.handleError(err);
      } finally {
        //Final Step when everyhitng is done executing
        this.loading = false;
      }
    },
    //Function to handle error received from api calls
    handleError(err) {
      if (err.response) {
        this.errorMsg =
          "Oops ! Looks like the request failed to get data. Please try again later...";
        // console.log("Problem with Response",err.response.status);
      } else {
        this.errorMsg = "Error Occured ! Please try again later...";
        // console.log("Error Occured -",err.message);
      }
    },
  },
};

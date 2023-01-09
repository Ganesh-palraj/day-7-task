let xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function(){
    if (xhr.status >= 200 && xhr.status < 300){
        let countriesData = JSON.parse(this.response);
        // console.log(countriesData)


// A. Get all the countries from the Asia continent /region using the Filter function

        let filteredData = countriesData.filter((info)=>info.region == "Asia")
         console.log(filteredData)

// OUTPUT:

// 0
// : 
// {name: {…}, tld: Array(1), cca2: 'PK', ccn3: '586', cca3: 'PAK', …}
// 1
// : 
// {name: {…}, tld: Array(1), cca2: 'MN', ccn3: '496', cca3: 'MNG', …}
// 2
// : 
// {name: {…}, tld: Array(1), cca2: 'TR', ccn3: '792', cca3: 'TUR', …}
// 3
// : 
// {name: {…}, tld: Array(2), cca2: 'AE', ccn3: '784', cca3: 'ARE', …}
// 4
// : 
// {name: {…}, tld: Array(1), cca2: 'ID', ccn3: '360', cca3: 'IDN', …}
// 5
// : 
// {name: {…}, tld: Array(1), cca2: 'KH', ccn3: '116', cca3: 'KHM', …}
// 6
// : 
// {name: {…}, tld: Array(1), cca2: 'LB', ccn3: '422', cca3: 'LBN', …}
// 7
// : 
// {name: {…}, tld: Array(1), cca2: 'MM', ccn3: '104', cca3: 'MMR', …}
// 8
// : 
// {name: {…}, tld: Array(1), cca2: 'KP', ccn3: '408', cca3: 'PRK', …}
// 9
// : 
// {name: {…}, tld: Array(1), cca2: 'OM', ccn3: '512', cca3: 'OMN', …}
// 10
// : 
// {name: {…}, tld: Array(1), cca2: 'YE', ccn3: '887', cca3: 'YEM', …}
// 11
// : 
// {name: {…}, tld: Array(1), cca2: 'KW', ccn3: '414', cca3: 'KWT', …}
// 12
// : 
// {name: {…}, tld: Array(2), cca2: 'PS', ccn3: '275', cca3: 'PSE', …}
// 13
// : 
// {name: {…}, tld: Array(2), cca2: 'QA', ccn3: '634', cca3: 'QAT', …}
// 14
// : 
// {name: {…}, tld: Array(3), cca2: 'TW', ccn3: '158', cca3: 'TWN', …}
// 15
// : 
// {name: {…}, tld: Array(1), cca2: 'AM', ccn3: '051', cca3: 'ARM', …}
// 16
// : 
// {name: {…}, tld: Array(1), cca2: 'GE', ccn3: '268', cca3: 'GEO', …}
// 17
// : 
// {name: {…}, tld: Array(1), cca2: 'PH', ccn3: '608', cca3: 'PHL', …}
// 18
// : 
// {name: {…}, tld: Array(1), cca2: 'BD', ccn3: '050', cca3: 'BGD', …}
// 19
// : 
// {name: {…}, tld: Array(2), cca2: 'KR', ccn3: '410', cca3: 'KOR', …}
// 20
// : 
// {name: {…}, tld: Array(2), cca2: 'JO', ccn3: '400', cca3: 'JOR', …}
// 21
// : 
// {name: {…}, tld: Array(1), cca2: 'BH', ccn3: '048', cca3: 'BHR', …}
// 22
// : 
// {name: {…}, tld: Array(5), cca2: 'CN', ccn3: '156', cca3: 'CHN', …}
// 23
// : 
// {name: {…}, tld: Array(1), cca2: 'MV', ccn3: '462', cca3: 'MDV', …}
// 24
// : 
// {name: {…}, tld: Array(1), cca2: 'BN', ccn3: '096', cca3: 'BRN', …}
// 25
// : 
// {name: {…}, tld: Array(1), cca2: 'MO', ccn3: '446', cca3: 'MAC', …}
// 26
// : 
// {name: {…}, tld: Array(2), cca2: 'IR', ccn3: '364', cca3: 'IRN', …}
// 27
// : 
// {name: {…}, tld: Array(2), cca2: 'KZ', ccn3: '398', cca3: 'KAZ', …}
// 28
// : 
// {name: {…}, tld: Array(1), cca2: 'LA', ccn3: '418', cca3: 'LAO', …}
// 29
// : 
// {name: {…}, tld: Array(1), cca2: 'UZ', ccn3: '860', cca3: 'UZB', …}
// 30
// : 
// {name: {…}, tld: Array(1), cca2: 'MY', ccn3: '458', cca3: 'MYS', …}
// 31
// : 
// {name: {…}, tld: Array(2), cca2: 'SA', ccn3: '682', cca3: 'SAU', …}
// 32
// : 
// {name: {…}, tld: Array(2), cca2: 'SY', ccn3: '760', cca3: 'SYR', …}
// 33
// : 
// {name: {…}, tld: Array(2), cca2: 'JP', ccn3: '392', cca3: 'JPN', …}
// 34
// : 
// {name: {…}, tld: Array(1), cca2: 'AF', ccn3: '004', cca3: 'AFG', …}
// 35
// : 
// {name: {…}, tld: Array(1), cca2: 'IQ', ccn3: '368', cca3: 'IRQ', …}
// 36
// : 
// {name: {…}, tld: Array(1), cca2: 'VN', ccn3: '704', cca3: 'VNM', …}
// 37
// : 
// {name: {…}, tld: Array(3), cca2: 'SG', ccn3: '702', cca3: 'SGP', …}
// 38
// : 
// {name: {…}, tld: Array(1), cca2: 'BT', ccn3: '064', cca3: 'BTN', …}
// 39
// : 
// {name: {…}, tld: Array(2), cca2: 'HK', ccn3: '344', cca3: 'HKG', …}
// 40
// : 
// {name: {…}, tld: Array(1), cca2: 'TJ', ccn3: '762', cca3: 'TJK', …}
// 41
// : 
// {name: {…}, tld: Array(1), cca2: 'AZ', ccn3: '031', cca3: 'AZE', …}
// 42
// : 
// {name: {…}, tld: Array(3), cca2: 'LK', ccn3: '144', cca3: 'LKA', …}
// 43
// : 
// {name: {…}, tld: Array(1), cca2: 'IN', ccn3: '356', cca3: 'IND', …}
// 44
// : 
// {name: {…}, tld: Array(1), cca2: 'NP', ccn3: '524', cca3: 'NPL', …}
// 45
// : 
// {name: {…}, tld: Array(1), cca2: 'TM', ccn3: '795', cca3: 'TKM', …}
// 46
// : 
// {name: {…}, tld: Array(1), cca2: 'IL', ccn3: '376', cca3: 'ISR', …}
// 47
// : 
// {name: {…}, tld: Array(1), cca2: 'KG', ccn3: '417', cca3: 'KGZ', …}
// 48
// : 
// {name: {…}, tld: Array(2), cca2: 'TH', ccn3: '764', cca3: 'THA', …}
// 49
// : 
// {name: {…}, tld: Array(1), cca2: 'TL', ccn3: '626', cca3: 'TLS', …}
// length
// : 
// 50
         
// B. Get all the countries with a population of less than 2 lakhs using Filter function

        let populationData = countriesData.filter((data)=>data.population > 200000);
        console.log(populationData)


// C. Print the following details name, capital, flag using forEach function

       countriesData.forEach(element => {
        console.log(`
        Name:${element.name.common}
        Capital:${element.capital}
        Flags:${element.flags.png}
        `)
       });

// D. Print the total population of countries using reduce function

      let countriesPopulation =[]
        countriesData.forEach(element =>{
            countriesPopulation.push(element.population)
        })
        // console.log(countriesPopulation)

        let totalPopulation = countriesPopulation.reduce((total,current)=>{
            return total+current
        })
        console.log(`Total Population of all the countries in rest countries:${totalPopulation}`)

        // OUTPUT:
        // Total Population of all the countries in rest countries:7777721563

//    E. Print the country which uses US Dollars as currency.
     
        let allusd = countriesData.filter((dummy) => (dummy.currencies !== undefined))
    let countriesusd = allusd.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    }
    })
    countriesusd.forEach(element => {
        console.log(`
        Name:${element.name.common}
        `)
       });
    }

    // OUTPUT:

    // Name:British Virgin Islands
    
    // Name:Palau
    
    // Name:Cambodia
    
    // Name:Turks and Caicos Islands
        
    // Name:United States Virgin Islands
        
    // Name:Guam
        
    // Name:Caribbean Netherlands
        
    // Name:El Salvador
        
    // Name:United States
        
    // Name:Marshall Islands
        
    // Name:Northern Mariana Islands
        
    // Name:United States Minor Outlying Islands
        
    // Name:Puerto Rico
        
    // Name:Micronesia
        
    // Name:Panama
        
    // Name:Bahamas
        
    // Name:Timor-Leste
        
    // Name:British Indian Ocean Territory
        
    // Name:American Samoa
        
    // Name:Ecuador
}



xhr.send();



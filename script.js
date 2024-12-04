    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const bornInFifteenHundreds = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      const fullNames = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      const sortedByOldest = inventors.sort((inventor1, inventor2) => inventor1.year > inventor2.year ? 1 : -1);
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      const yearsAlive = inventors.reduce((total, inventor) => total += (inventor.passed - inventor.year), 0);
  
      // 5. Sort the inventors by years lived
      const sortByOldest = inventor.sort((inventor1, inventor2) => {
        let inventor1Age = inventor1.passed - inventor1.year;
        let inventor2Age = inventor2.passed - inventor2.year;
        return inventor1Age >= inventor2Age ? -1 : 1;
      })
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      const category = document.querySelector('.mw-category');
      const boulevardLinks = Array.from(category.querySelectorAll('a'));
      const filteredBoulevardList = boulevardLinks
        .map(link => link.textContent)
        .filter(streetName => streetName.includes('de'));

  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      
      const alphabeticalOrder = people.sort((person1, person2) => {
        const [lastName1, firstName1] = person1.split(', ');
        const [lastName2, firstName2] = person2.split(', ');
        return lastName1 < lastName2 ? -1 : 1;
      })
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      const transportationMap = new Map();
      data.forEach((transport) => {
        if (!transportationMap.has(transport)) {
            transportationMap.set(transport, 0);
        }
        const currentValue = transportationMap.get(transport);
        transportationMap.set(transport, currentValue + 1);
      });
// function DataSource(onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
// }

// DataSource.prototype.searchClub = function (keyword) {
//   const filteredClubs = clubs.filter((club) => club.name.toUpperCase().includes(keyword.toUpperCase()));

//   if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//   } else {
//     this.onFailed(`${keyword} is not found`);
//   }
// };

class DataSource {
  // constructor(onSuccess, onFailed) {
  //   this.onSuccess = onSuccess;
  //   this.onFailed = onFailed;
  // }

  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter((club) => club.name.toUpperCase().includes(keyword.toUpperCase()));

      if (filteredClubs.length) {
        // this.onSuccess(filteredClubs);
        resolve(filteredClubs);
      } else {
        // this.onFailed(`${keyword} is not found`);
        reject(`${keyword} is not found`);
      }
    });
  }
}

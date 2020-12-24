export function getGenres(genres) {
   if (!genres) return '';
   let genre = '';
   for (let i = 0; i < genres.length - 1; i++) genre += genres[i]?.name + ', ';
   genre += genres[genres.length - 1]?.name;
   return genre;
}

export function getRuntime(runtime) {
   if (!runtime || runtime === 0) return '';
   else if (runtime < 60) return `${runtime}m`;
   else return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
}

export function formatDate(date) {
   if (!date || date === '') return '';

   const arr = date.split('-');
   if (arr.length !== 3) return '';

   const months = [
      '',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
   ];
   let str = arr[2];

   if (arr[2] === '1' || arr[2] === '11' || arr[2] === '21' || arr[2] === '31')
      str += 'st ';
   else if (arr[2] === '2' || arr[2] === '12' || arr[2] === '22') str += 'nd ';
   else if (arr[2] === '3' || arr[2] === '13' || arr[2] === '23') str += 'rd ';
   else str += 'th ';

   if (arr[1][0] === '0') str += months[arr[1][1]];
   else str += months[arr[1]];
   str += ' ' + arr[0];
   return str;
}

export function getReleaseYear(movie, mediaType) {
   if (!movie) return '';
   if (mediaType === 'movie') {
      return movie.release_date?.substr(0, 4);
   } else {
      const firstAirDate = movie.first_air_date?.substr(0, 4);
      const lastAirDate = movie.last_air_date?.substr(0, 4);
      if (firstAirDate === lastAirDate) {
         return firstAirDate;
      } else return firstAirDate + ' - ' + lastAirDate;
   }
}

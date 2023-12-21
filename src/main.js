$(() => {
	let customerName, dateString, days, people;
	
	
	$('#name').keyup(() => {
		customerName = $('#name').val();
		if (customerName === '') {
			$('#name-err').text('Please enter your Name').css({'color':'red','font-size':'0.8rem', 'font-weight': 'bold'});
		} else {
			$('#name-err').text('');
		}
	});
	
	$('#date').change(() => {
		let now = new Date();
		console.log(now, now.getDate(), now.getUTCMonth()+1, now.getFullYear());
		let date = $('#date').val();
		let [year,month,day] = date.split('-');
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		dateString = `${day} ${months[month-1]}, ${year}`;
	});
	
	$('#days').change(() => {
		days = $('#days').val();
	});
	
	$('#people').change(() => {
		people = $('#people').val();
	});
	
	
})

$(() => {
	let customerName, dateString, days, people, roomType, roomPrice, roomImg, ac, acPrice, locker, lockerPrice, amenitiesPrice, advance, grossTotal, netTotal;
	const selectedItems = [];
	
	$('#one-btn').click(() => {
	
		// getting customer name
		customerName = $('#name').val();
		
		// getting date
		let date = $('#date').val();
		let now = new Date();
		let [year,month,day] = date.split('-');
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		dateString = `${day} ${months[month-1]}, ${year}`;
		
		
		// getting no. of days
		days = $('#days').val();

		
		// getting no. of people
		people = $('#people').val();
		
		if(customerName === '' || customerName === undefined || 
			date === '' || date === undefined || 
			days === '' || days === undefined || 
			people === '' || people === undefined){
				alert('Please enter all required details');
		} else {
			$('#one-nav').removeClass('show active');
			$('#one').removeClass('show active');
			
			$('#two-nav').removeClass('disabled');
			
			$('#two-nav').addClass('show active');
			$('#two').addClass('show active');
		}
	});
	
	
	
	$('#two-btn').click(() => {
		if ($('#delux').is(":checked")) {
			roomImg = "public/images/delux-room.jpg";
			roomType = $('#lblDelux').text()
			roomPrice = 2500;
		};
		if ($('#suite').is(':checked')) {
			roomImg = "public/images/suite-room.jpg";
			roomType = $('#lblSuite').text()
			roomPrice = 4000;
		};
		
		$('#two-nav').removeClass('show active');
		$('#two').removeClass('show active');
		
		$('#three-nav').removeClass('disabled');
		
		$('#three-nav').addClass('show active');
		$('#three').addClass('show active');
	});
	
	$('#three-btn').click(() => {
		
		selectedItems.length = 0;
		acPrice = 0;
		lockerPrice = 0;
		
		// getting amenities selection
		if ($('#ac').is(':checked')) {
			selectedItems.push('AC');
			acPrice = 1000;
		};
		if ($('#locker').is(':checked')) {
			selectedItems.push('Locker');
			lockerPrice = 300;
		};
		
		if(selectedItems.length === 0){
			selectedItems.push('No Amenities Selected');
		}
		
		amenitiesPrice = acPrice + lockerPrice;
		
		
		
		$('#three-nav').removeClass('show active');
		$('#three').removeClass('show active');
		
		$('#four-nav').removeClass('disabled');
		
		$('#four-nav').addClass('show active');
		$('#four').addClass('show active');
	});
	
	$('#four-btn').click(() => {
		
		if($('#advance-amount').val() === '' || $('#advance-amount').val() < 1000) {
			alert('Advance payment of a minimum of Rs.1000/- is mandatory.');
		} else {
			advance = $('#advance-amount').val();
			
			grossTotal = (roomPrice + amenitiesPrice)*days;
			if(people>2){
				n = people-2;
				for(let i=0;i<n;i++){
					grossTotal+=1000
				}
			}
			
			netTotal = grossTotal - advance;
	
			if(advance>grossTotal){
				alert('Advance cannot be greater than the total amount.');
			} else {
				getSummary();
			}
		
			
			
		}

	});
	
	function getSummary(){
		$('#modal').modal('show');
		$('#payment').text(`Proceed to Pay Rs.${advance}/-`);
		$('#summary').html(`
			<div class="container">
				<div class="row text-center">
					<div class="col">
						<img class="mb-3" src=${roomImg} height="200"/>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<dl>
							<dt>Customer Name</dt>
							<dd>${customerName}</dd>
							<dt>Check-in Date</dt>
							<dd>${dateString}</dd>
							<dt>No. of Days</dt>
							<dd>${days}</dd>
							<dt>No. of People</dt>
							<dd>${people}</dd>
							<dt>Room Type</dt>
							<dd>${roomType} - Rs.${roomPrice}/-</dd>
							
						</dl>
					</div>
					<div class="col">
						<dl>
							<dt>Amenities</dt>
							<dd>${selectedItems.join(' & ')} - Rs.${amenitiesPrice}/-<dd>
							<dt>Total Amount</dt>
							<dd>${grossTotal}</dd>
							<dt>Advance Payment</dt>
							<dd>${advance}</dd>
							<dt>Amount to be paid after Check-out</dt>
							<dd>${netTotal}</dd>
					</div>
				</div>
			</div>
			
		`);
	};
	
	$('#payment').click(() => {
		location.href = 'https://www.youtube.com/watch?v=K4smXP46tG4';
	});
	
	
})

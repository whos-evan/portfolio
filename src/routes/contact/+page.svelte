<script lang="ts">
    // generate a random fax number
    let fax = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
    fax = fax.slice(0, 3) + '-' + fax.slice(3, 6) + '-' + fax.slice(6, 10); 

    // generate a random home address
    let address = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    address = address.slice(0, 4) + ' ' + address.slice(4, 8);
    // add a random street name
    const streetNames = ['Main', 'Maple', 'Oak', 'Pine', 'Cedar', 'Elm', 'Birch', 'Willow', 'Hickory', 'Walnut', 'Ash', 'Cherry', 'Locust', 'Spruce', 'Sycamore', 'Cypress', 'Hawthorn', 'Poplar', 'Palm', 'Juniper', 'Cottonwood', 'Dogwood', 'Magnolia', 'Peach', 'Pear', 'Plum', 'Pecan', 'Walnut', 'Almond', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry', 'Cherry', 'Coconut', 'Cranberry', 'Fig', 'Grape', 'Grapefruit', 'Guava', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Melon', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberry', 'Strawberry', 'Tangerine', 'Watermelon', 'Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry', 'Cherry', 'Coconut', 'Cranberry', 'Fig', 'Grape', 'Grapefruit', 'Guava', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Melon', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberry', 'Strawberry', 'Tangerine', 'Watermelon'];
    address = address + streetNames[Math.floor(Math.random() * streetNames.length)] + ' St.';
    // add a random city name
    const cityNames = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Columbus', 'Fort Worth', 'Charlotte', 'Detroit', 'El Paso', 'Memphis', 'Boston', 'Seattle', 'Denver', 'Washington', 'Nashville', 'Baltimore', 'Louisville', 'Milwaukee', 'Portland', 'Las Vegas', 'Oklahoma City', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Long Beach', 'Kansas City', 'Mesa', 'Atlanta', 'Colorado Springs', 'Virginia Beach', 'Raleigh', 'Omaha', 'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Cleveland', 'Wichita', 'Arlington', 'New Orleans', 'Bakersfield', 'Tampa', 'Honolulu', 'Aurora', 'Anaheim', 'Santa Ana', 'St. Louis', 'Riverside', 'Corpus Christi', 'Pittsburgh', 'Lexington', 'Anchorage', 'Stockton', 'Cincinnati', 'St. Paul', 'Toledo', 'Greensboro', 'Newark', 'Plano', 'Henderson', 'Lincoln', 'Buffalo', 'Jersey City', 'Chula Vista', 'Fort Wayne', 'Orlando', 'St. Petersburg', 'Chandler', 'Laredo', 'Norfolk', 'Durham', 'Madison', 'Lubbock', 'Irvine', 'Winston–Salem', 'Glendale', 'Garland', 'Hialeah', 'Reno', 'Chesapeake', 'Gilbert', 'Baton Rouge', 'Irving', 'Scottsdale', 'North Las Vegas', 'Fremont', 'Boise', 'Richmond', 'San Bernardino', 'Birmingham', 'Spokane', 'Rochester', 'Des Moines', 'Modesto', 'Fayetteville', 'Tacoma', 'Oxnard', 'Fontana', 'Columbus', 'Montgomery', 'Moreno Valley', 'Shreveport', 'Aurora', 'Yonkers', 'Akron', 'Huntington Beach']
    address = address + ', ' + cityNames[Math.floor(Math.random() * cityNames.length)] + ', ' + 'NY';
    // add a random zip code
    let zip = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    address = address + ' ' + zip;

    // generate a random public ip address
    let ip = Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256);

</script>

<div class="font-pixeloid bg-white m-5">
    <h1 class="text-3xl">
        contact me
    </h1>
    <p>
        You can contact me at <a href="mailto:coming@soon.com">coming@soon.com</a>
        <br>
        You can message me on Discord: evan#9000.
        <br>
        You can fax me at {fax}.
        <br>
        My home address is {address}.
        <br>
        My public IP address is {ip}.
    </p>
</div>
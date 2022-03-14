'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        userId: 1,
        address: '9300 W Mall Dr',
        city: 'Everett',
        state: 'WA',
        country: 'US',
        zipcode: '98208',
        name: 'Cozy Retreat Close to Clark Park',
        price: 30.00,
        description: `This is a large private room in the lower unit of a house. (Please be advice that you are not renting entire house or entire unit rather only a private bedroom.) The unit has a shared kitchen, living room, large screen TV, High speed wireless internet, coffee, tea, toaster, laundry etc. It has a queen-size beds and a couch accommodating a group (up to 2 people). Free parking place is available.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598357/0001.jpg',
      },
      {
        userId: 2,
        address: '317 E 9th St',
        city: 'Port Angeles',
        state: 'WA',
        country: 'US',
        zipcode: '98362',
        name: 'Spare Bedroom Nestled under Mt Olympus',
        price: 45.00,
        description: `The Birch Treehouse is a cozy room with a hand crafted, white birch log bed! Incorporated into the headboard is a real birch tree! The branches reach to the high ceiling, and bend over the bed, creating a natural canopy! It will stir memories of childhood adventures in and around the trees!

        Enter on your private deck and through your private entry, with keyless locks. Your guest suite includes a private bath. Besides your guest room, you are free to enjoy your own private deck; the library sitting area with Butler’s Pantry; large deck with Mountain Views; and outdoor spa.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598414/0002.jpg',
      },
      {
        userId: 3,
        address: '903 S Albert St',
        city: 'Port Angeles',
        state: 'WA',
        country: 'US',
        zipcode: '98362',
        name: 'Relax Next to Olympic National Park!',
        price: 40.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598422/0003.jpg',
      },
      {
        userId: 4,
        address: '223 W Park Ave',
        city: 'Port Angeles',
        state: 'WA',
        country: 'US',
        zipcode: '98362',
        name: 'Weekend Getaway at Olympic National Park',
        price: 48.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598438/0004.jpg',
      },
      {
        userId: 5,
        address: '158 W 27th St',
        city: 'New York',
        state: 'NY',
        country: 'US',
        zipcode: '10001',
        name: 'Walking Distance to Times Square',
        price: 40,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598455/0005.jpg',
      },
      {
        userId: 6,
        address: '580 8th Ave',
        city: 'New York',
        state: 'NY',
        country: 'US',
        zipcode: '10018',
        name: 'Experience the Best of NYC',
        price: 50,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598463/0006.jpg',
      },
      {
        userId: 7,
        address: '45 E 81st St',
        city: 'New York',
        state: 'NY',
        country: 'US',
        zipcode: '10028',
        name: 'Cozy Bedroom Right Off Museum Mile, Manhattan',
        price: 65,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598470/0007.jpg',
      },
      {
        userId: 8,
        address: '1383 Dean St',
        city: 'Brooklyn',
        state: 'NY',
        country: 'US',
        zipcode: '11216',
        name: 'Comfortable Bed with Public Transport to Manhattan',
        price: 30,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598488/0008.avif',
      },
      {
        userId: 9,
        address: '778 23rd Ave',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
        zipcode: '94121',
        name: 'Clean, Modern Spare Room Right in the Middle of Town',
        price: 45.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598498/0009.jpg',
      },
      {
        userId: 10,
        address: '791 La Playa St',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
        zipcode: '94121',
        name: 'Relax on the Beach!',
        price: 65.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598509/0010.jpg',
      },
      {
        userId: 11,
        address: '3603 Wawona St',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
        zipcode: '94116',
        name: 'Walking Distance Between San Francisco Zoo and Ocean Beach',
        price: 70.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598515/0011.jpg',
      },
      {
        userId: 12,
        address: '1342 S Plymouth Ct',
        city: 'Chicago',
        state: 'IL',
        country: 'US',
        zipcode: '60605',
        name: 'Perfect Weekend Getaway in the Big City',
        price: 55.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598544/0012.jpg',
      },
      {
        userId: 13,
        address: '1222 S State St',
        city: 'Chicago',
        state: 'IL',
        country: 'US',
        zipcode: '60605',
        name: 'Rustic Farmhouse Spare Room',
        price: 50.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598557/0013.jpg',
      },
      {
        userId: 14,
        address: '1220 Comox St',
        city: 'Vancouver',
        state: 'BC',
        country: 'CA',
        zipcode: 'V6E 1K7',
        name: 'Cozy Attic Room in Downtown Vancouver',
        price: 55.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598565/0014.jpg',
      },
      {
        userId: 15,
        address: '701 W Georgia St',
        city: 'Vancouver',
        state: 'BC',
        country: 'CA',
        zipcode: 'V7Y 1C6',
        name: '5 minutes from Vancouver Art Gallery',
        price: 59.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598608/0015.jpg',
      },
      {
        userId: 16,
        address: '814 Richards St',
        city: 'Vancouver',
        state: 'BC',
        country: 'CA',
        zipcode: 'V6B 2B5',
        name: 'Two Twin Beds Available Downtown Vancouver',
        price: 30.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598708/0016.jpg',
      },
      {
        userId: 17,
        address: '3 Freeman Rd',
        city: 'Hanover',
        state: 'NH',
        country: 'US',
        zipcode: '03755',
        name: 'Walking Distance to Dartmouth Campus',
        price: 40.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598729/0017.jpg',
      },
      {
        userId: 18,
        address: '819 Bourbon St',
        city: 'New Orleans',
        state: 'LA',
        country: 'US',
        zipcode: '70116',
        name: 'Stay in the French Quarter!',
        price: 50.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598742/0018.jpg',
      },
      {
        userId: 19,
        address: '300 Royal St',
        city: 'New Orleans',
        state: 'LA',
        country: 'US',
        zipcode: '70130',
        name: 'Farmhouse Chic in the French Quarter',
        price: 55.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598793/0019.webp',
      },
      {
        userId: 20,
        address: '913 15th Ave S',
        city: 'Nashville',
        state: 'TN',
        country: 'US',
        zipcode: '37212',
        name: 'Welcome to Music City!',
        price: 40.00,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu quam iaculis, volutpat magna eu, elementum diam. Sed gravida maximus ante, ut ultricies lacus consectetur eu. Etiam porta tortor id tellus blandit, non faucibus tellus ultrices. Sed id nisi ut risus volutpat placerat. Vivamus volutpat a odio ut eleifend. Cras imperdiet lorem id lacus sollicitudin lobortis. Proin mollis dignissim velit, at molestie ante rhoncus eget.

        Aliquam erat volutpat. Vestibulum commodo aliquam tortor vestibulum semper. Aliquam ut vestibulum erat. Donec luctus mi eget eros tristique, vel molestie nisl pellentesque. Donec facilisis eget nisi ac feugiat. Donec tempor semper neque, in tincidunt sem lobortis non. Nullam at dui rutrum, luctus purus ut, imperdiet sem. Sed convallis placerat eros, et interdum dolor pretium et. Mauris vitae erat eu lacus fermentum hendrerit laoreet a est.`,
        imageUrl: 'https://res.cloudinary.com/dy2azwmd6/image/upload/v1641598810/0020.jpg',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
  }
};

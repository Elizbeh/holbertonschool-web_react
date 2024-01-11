import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const updateCounter = _.debounce(() => {
  const count = $('#count').data('count') || 0;
  $('count').text(`${count+1} clicks on the button`).data('count', count + 1);
}, 500);


$('#startBtn').on('click', updateCounter);

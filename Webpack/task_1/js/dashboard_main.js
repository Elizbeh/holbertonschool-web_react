import $ from 'jquery';
import _ from 'lodash';

const updateCounter = _.debounce(() => {
  const count = $('#count').data('count') || 0;
  $('count').text(`${count+1} clicks on the button`).data('count', count + 1);
}, 500);

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('#startBtn').on('click', updateCounter);

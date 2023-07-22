import moment from 'moment';

export const columns = [
  {
    header: 'Name',
    accessorKey: 'name',
    footer: 'Name',
  },
  {
    header: 'Date Of Race',
    accessorKey: 'dateOfRace',
    footer: 'Date Of Race',
    cell: (info) => moment(info.getValue()).format('YYYY-MM-DD'),
  },
  {
    header: 'Location',
    accessorKey: 'location',
    footer: 'Location',
  },
  {
    header: 'Description',
    accessorKey: 'description',
    footer: 'Description',
  },
  {
    header: 'Start Time',
    accessorKey: 'startTime',
    footer: 'Start Time',
  },
  {
    header: 'End Time',
    accessorKey: 'endTime',
    footer: 'End Time',
  },
  {
    header: 'Welcome Package',
    accessorKey: 'welcomePackage',
    footer: 'Welcome Package',
  },
];

import { addDays, subDays } from 'date-fns'

export const getDemoEvents = (today) => [
  // Past events (greyish)
  {
    title: 'Reksis - Vakcinācija',
    start: subDays(today, 2).toISOString().split('T')[0] + 'T09:00:00',
    end: subDays(today, 2).toISOString().split('T')[0] + 'T09:30:00',
    className: 'past-event'
  },
  {
    title: 'Minka - Apskate',
    start: subDays(today, 1).toISOString().split('T')[0] + 'T14:00:00',
    end: subDays(today, 1).toISOString().split('T')[0] + 'T14:30:00',
    className: 'past-event'
  },
  {
    title: 'Lācis - Kastrācija',
    start: subDays(today, 2).toISOString().split('T')[0] + 'T11:00:00',
    end: subDays(today, 2).toISOString().split('T')[0] + 'T12:00:00',
    className: 'past-event'
  },
  {
    title: 'Pūka - Analīzes',
    start: subDays(today, 1).toISOString().split('T')[0] + 'T09:30:00',
    end: subDays(today, 1).toISOString().split('T')[0] + 'T10:00:00',
    className: 'past-event'
  },
  {
    title: 'Riko - Ķirurģija',
    start: subDays(today, 2).toISOString().split('T')[0] + 'T13:00:00',
    end: subDays(today, 2).toISOString().split('T')[0] + 'T14:30:00',
    className: 'past-event'
  },
  
  // Today's events (jade)
  {
    title: 'Džeris - Ķirurģija',
    start: today.toISOString().split('T')[0] + 'T10:00:00',
    end: today.toISOString().split('T')[0] + 'T11:30:00',
    className: 'today-event'
  },
  {
    title: 'Luna - Zobu tīrīšana',
    start: today.toISOString().split('T')[0] + 'T13:00:00',
    end: today.toISOString().split('T')[0] + 'T14:00:00',
    className: 'today-event'
  },
  {
    title: 'Bingo - Vakcinācija',
    start: today.toISOString().split('T')[0] + 'T15:30:00',
    end: today.toISOString().split('T')[0] + 'T16:00:00',
    className: 'today-event'
  },
  {
    title: 'Princis - Apskate',
    start: today.toISOString().split('T')[0] + 'T08:30:00',
    end: today.toISOString().split('T')[0] + 'T09:00:00',
    className: 'today-event'
  },
  
  // Future events (pink)
  {
    title: 'Bella - Vakcinācija',
    start: addDays(today, 1).toISOString().split('T')[0] + 'T09:30:00',
    end: addDays(today, 1).toISOString().split('T')[0] + 'T10:00:00',
    className: 'future-event'
  },
  {
    title: 'Muris - Sterilizācija',
    start: addDays(today, 2).toISOString().split('T')[0] + 'T11:00:00',
    end: addDays(today, 2).toISOString().split('T')[0] + 'T12:30:00',
    className: 'future-event'
  },
  {
    title: 'Koko - Ķirurģija',
    start: addDays(today, 1).toISOString().split('T')[0] + 'T13:00:00',
    end: addDays(today, 1).toISOString().split('T')[0] + 'T14:30:00',
    className: 'future-event'
  },
  {
    title: 'Fēlikss - Zobu tīrīšana',
    start: addDays(today, 3).toISOString().split('T')[0] + 'T10:00:00',
    end: addDays(today, 3).toISOString().split('T')[0] + 'T11:00:00',
    className: 'future-event'
  },
  {
    title: 'Lote - Apskate',
    start: addDays(today, 2).toISOString().split('T')[0] + 'T15:00:00',
    end: addDays(today, 2).toISOString().split('T')[0] + 'T15:30:00',
    className: 'future-event'
  },
  {
    title: 'Ričijs - Analīzes',
    start: addDays(today, 1).toISOString().split('T')[0] + 'T16:00:00',
    end: addDays(today, 1).toISOString().split('T')[0] + 'T16:30:00',
    className: 'future-event'
  }
] 
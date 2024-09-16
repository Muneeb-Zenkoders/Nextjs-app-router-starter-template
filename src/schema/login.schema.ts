import * as Yup from 'yup';

export const validationSchema = Yup.object({
  staffMember: Yup.string()
    .required('Staff member is required'),
  date: Yup.date()
    .required('Date is required')
    .nullable(), // Allows for an empty field but will require a date if it's filled
  start: Yup.string()
    .matches(
      /^(0?[1-9]|1[0-2]):([0-5][0-9]) ?([APap][mM])?$/,
      'Start time must be in the format HH:MM AM/PM'
    )
    .required('Scheduled start time is required'),
  end: Yup.string()
    .matches(
      /^(0?[1-9]|1[0-2]):([0-5][0-9]) ?([APap][mM])?$/,
      'End time must be in the format HH:MM AM/PM'
    )
    .required('Scheduled end time is required'),
  site: Yup.string()
    .required('Site is required'),
  job: Yup.string()
    .required('Job is required'),
});

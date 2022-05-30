export const formatContactName = (firstName: string, lastName: string) => [firstName, lastName].filter(Boolean).join(' ');

export default {
  formatContactName,
};

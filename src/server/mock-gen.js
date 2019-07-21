const loremIpsum = require("lorem-ipsum").loremIpsum;

function getIdGenerator() {
  let id = 0;
  return function() {
    return id++;
  };
}

const getId = getIdGenerator();

const email = {
  date: new Date(),
  from: "vkuschenko@gmail.com",
  isRead: false
};

const getEmails = (folder, amount) =>
  [...Array(amount)].map(() => ({
    ...email,
    content: loremIpsum({
      count: 5, // Number of "words", "sentences", or "paragraphs"
      format: "plain", // "plain" or "html"
      paragraphLowerBound: 3, // Min. number of sentences per paragraph.
      paragraphUpperBound: 7, // Max. number of sentences per paragarph.
      sentenceLowerBound: 5, // Min. number of words per sentence.
      sentenceUpperBound: 15, // Max. number of words per sentence.
      units: "paragraphs"
    }),
    id: getId(),
    subject: `${folder} email`,
    folder
  }));

const inboxEmails = getEmails("inbox", 30);

const sentEmails = getEmails("sent", 10);

const draftsEmails = getEmails("drafts", 3);

const pinsEmails = getEmails("pins", 5);

const archiveEmails = getEmails("archive", 100);

const emails = inboxEmails
  .concat(sentEmails)
  .concat(draftsEmails)
  .concat(pinsEmails)
  .concat(archiveEmails);

module.exports = { emails, getEmails };

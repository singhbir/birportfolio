import db from 'utils/Fire';

export const getDataFromFireDB = (collectionName: string) => {
  return db
    .collection(collectionName)
    .get()
    .then(snapshot => {
      const data = snapshot.docs.map(doc => doc.data());
      return Promise.resolve(data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

import axios from 'axios';
import Cryptr from 'cryptr';
import toast from '../components/Toast';

let history = {};
export const setHistory = ({ routeHistory }) => {
  history = routeHistory;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const axiosCall = async ({
  path, payload, method, contentType
}) => {
  const url = `${process.env.SERVER_URL}${path}`;
  const headers = {
    'x-access-token': localStorage.token,
    'Content-Type': contentType || 'application/json',
  };
  const axiosdata = {
    method,
    url,
    data: payload,
    headers,
    json: true,
  };

  try {
    const result = await axios(axiosdata);
    const data = result && result.data;
    return data;
  } catch (error) {
    const { response } = error;
    if (response.data.message === 'Unauthorized access') {
      clearLocalStorage();
      toast('Kindly login', 'error');
      history.push('/');
      return;
    }
    throw error;
  }
};

export const saveToLocalStorage = (user) => {
  if (user) {
    const token = user.token || localStorage.getItem('token');
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    token ? localStorage.setItem('isAuthenticated', true) : '';
  }
};

export const decryptQuery = (string) => {
  const cryptr = new Cryptr(process.env.SECRET);
  const decryptedString = cryptr.decrypt(string);
  return decryptedString;
};

export const cardStyle = (imgURL) => {
  const card = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: `url(${imgURL})`,
  };
  return card;
};

export const setUpUser = payload => ({ type: 'SETUP_USER', payload });

export const getUser = () => (dispatch) => {
  try {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (user) {
      const payload = {
        user,
        isAuthenticated: true
      };
      dispatch(setUpUser(payload));
    } else {
      // eslint-disable-next-line no-throw-literal
      throw null;
    }
  } catch (error) {
    const payload = {
      user: {},
      isAuthenticated: false
    };
    dispatch(setUpUser(payload));
  }
};

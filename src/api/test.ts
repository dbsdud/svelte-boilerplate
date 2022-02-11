import axios from 'axios';

export const doTest = async () => {
    try {
        const res = await axios.get('/api');
        return res.data;
    } catch(error) {
        console.log(error);
    }
}
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4';

export const fetchLaunches = async () => {
  try {
    const response = await axios.get(`${API_URL}/launches`);
    return response.data.map(launch => ({
      ...launch,
      links: {
        ...launch.links,
        patch: launch.links?.patch || {},
        flickr: {
          ...launch.links?.flickr,
          original: launch.links?.flickr?.original || [],
          small: launch.links?.flickr?.small || []
        }
      }
    }));
  } catch (error) {
    console.error('Error fetching launches:', error);
    return [];
  }
};
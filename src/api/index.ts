import axios from 'axios'
import { METADATA_CREATOR_URL } from '../constants';

export const createMetadata = async (color: string): Promise<string> => {
    const res = await axios.get(METADATA_CREATOR_URL + `?color=${color.slice(1, color.length)}`)
    return res.data
}
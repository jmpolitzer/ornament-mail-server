import SibApiV3Sdk from 'sib-api-v3-sdk';
import { SIB_API_KEY } from './config';

const defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = SIB_API_KEY;

const sibApi = SibApiV3Sdk;

export default sibApi;

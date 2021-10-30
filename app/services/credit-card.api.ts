import {ApiBaseSetup} from './api';

export class CreditCardApi {
  async getAllCreditCards(): Promise<any> {
    try {
      const response = await ApiBaseSetup().get(
        'customers/cus_K94gx7IB6UcJLB/sources',
      );
      if (response.status !== 200) {
        return console.log('error fetching data');
      }
      return response.data.data;
    } catch (error) {
      return console.log('error: ' + error);
    }
  }
}

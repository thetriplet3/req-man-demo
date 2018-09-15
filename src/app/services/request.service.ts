import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../models/request.model'
import { RequestType } from '../models/requestType.model';



@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getRequests() {
    return this.http.get<Request>('https://13.229.139.61:5000/api/Requests');
  }
  getRequestTypes() {
    return this.http.get<RequestType>('https://13.229.139.61:5000/api/RequestTypes');
  }
  getRequest(id) {
    return this.http.get<Request>(`https://13.229.139.61:5000/api/Requests/${id}`);
  }

  createRequest(requestObj) {
    
    return this.http.post<Request>(`https://13.229.139.61:5000/api/Requests/`, requestObj);
  }
  updateRequest(requestObj) {
    return this.http.put<Request>(`https://13.229.139.61:5000/api/Requests/${requestObj.requestId}`, requestObj);
  }
}

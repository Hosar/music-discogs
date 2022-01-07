export interface Read {
  read: () => any;
}

export function WithSuspenseContract(promise: Promise<any>): Read {
    let status: string = "pending";
    let result: any;
    
    let suspender = promise.then(
      (r) => {
        status = "success";
        result = r;
      },
      (e) => {
        status = "error";
        result = e;
      }
    );

    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          console.log('Type of result', typeof result);
          console.log('result 1-', result);
          console.log('result 2-', result?.data);
          console.log('result 3-', typeof result?.data);
          console.log('result 4-', result?.body?.results);
          return result?.results;
          // try{
          //   const data = JSON.parse(result?.data);
          //   return data.results;
          // } catch(e) {
          //     throw Error("Not able to parse")
          // }
          
        }
      }
    };
  }
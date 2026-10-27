export interface Page <T>{

    content:T[];

    pageable:{
        pageNumber:number;
        pageSize:number;
        sort:{
            empty:boolean;
            sorted:boolean;
            unsorted:boolean;
        };
        offset:number;
        paged:boolean;
        unpaged:boolean;

    };

    totalPages:number;
    totalElements:number;


    empty:boolean;
    frist:boolean;
    last:boolean;
    size:number;
    number:number;
    sort:{
            empty:boolean;
            sorted:boolean;
            unsorted:boolean;
    };
    numberOfElements:number;
    
}

export function getPriviewPageNumbers<T>(page:Page<T> , previewCount:number = 5 ):number[]{
  const currentPage = page.number;
  const totalPages = page.totalPages;

  if (totalPages === 0) {
    return []
  }

  const half = Math.floor(previewCount / 2);

  let minPage = Math.max(0,currentPage - half);
  let maxPage = Math.min(totalPages - 1 ,currentPage + half);

  if (maxPage-minPage + 1 < previewCount) {
    
    maxPage = Math.min(

        totalPages -1,
        minPage + previewCount -1
    );

    if (maxPage - minPage + 1 <previewCount) {
        minPage=Math.max(
            0,maxPage - previewCount + 1
        );
    }
  }

  const pageNumber:number[] = [];


  for (let i = minPage; i <= maxPage; i++) {
    pageNumber.push(i);

    
    
  }
  return pageNumber;
}


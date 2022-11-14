export class Home {
  //Property need to having the same of response of API
  // public movieId: string = '';
  // public title: string = '';
  // public description: string = '';
  // public rating: number = 0;
  // public votes: number = 0;
  // public imageUrl: string = '';
  // public trailerUrl: string = '';
  // public year: number = 0;
  // public duration: number = 0;
  // // actors:Array[] ;
  // // genres:Array[];
  // public director: string = '';

  constructor(
    public movieId: string = '',
    public title: string = '',
    public description: string = '',
    public rating: number = 0,
    public votes: number = 0,
    public imageUrl: string = '',
    public trailerUrl: string = '',
    public year: number = 0,
    public duration: number = 0,
    // public actors:[]=[] ,
    // public genres:[]=[],
    public director: string = '',
  ) {}
}

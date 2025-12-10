export interface CastMember {
  _key: string;
  characterName?: string;
  person: {
    _ref?: string;        
    name?: string;      
    image?: {
      asset?: {
        url?: string;
      };
    };
  };
}

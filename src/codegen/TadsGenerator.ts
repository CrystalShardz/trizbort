import { Map } from "../models/map";
import { Room } from "../models/room";
import { Connector } from "../models/connector";
import { Model } from "../models/model";
import { Direction, ObjectKind } from "../enums/enums";
import { CodeGenerator } from "./CodeGenerator";

export class TadsGenerator extends CodeGenerator {
  
  constructor(map: Map) {
    super(map);
    Handlebars.registerHelper('dirToStr', (dir:Direction) => { return this.dirToStr(dir); }); 
    Handlebars.registerHelper('kindToStr', (kind:ObjectKind) => { return this.kindToStr(kind); }); 
    Handlebars.registerPartial('tadsObject', Handlebars.templates.tadsObject);
  }

  protected dirToStr(dir: Direction): string {
    switch(dir) {
      case Direction.N:   return "north";
      case Direction.NNE: return "northnortheast";
      case Direction.NE:  return "northeast";
      case Direction.ENE: return "eastnortheast";
      case Direction.E:   return "east";
      case Direction.ESE: return "eastsoutheast";
      case Direction.SE:  return "southeast";
      case Direction.SSE: return "southsoutheast";
      case Direction.S:   return "south";
      case Direction.SSW: return "southsouthwest";
      case Direction.SW:  return "southwest";
      case Direction.WSW: return "westsouthwest";
      case Direction.W:   return "west";
      case Direction.WNW: return "westnorthwest";
      case Direction.NW:  return "northwest";
      case Direction.NNW: return "northnorthwest";         
      default: return "";
    }    
  }

  protected kindToStr(dir: ObjectKind): string {
    switch(dir) {
      case ObjectKind.Actor:   return "Actor";
      case ObjectKind.Item:   return "Item";
      case ObjectKind.Scenery:   return "Decoration";
      default: return "";
    }     
  }

  public generate() {
    console.log(Handlebars.templates.tads({ map: this.map }));
  }
}
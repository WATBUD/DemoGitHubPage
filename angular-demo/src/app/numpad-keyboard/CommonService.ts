import { Injectable, ApplicationRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
declare var System;
@Injectable()
export class CommonService{
	titlepageFlag:any = 0
	currentpage:number = 0;
	static instance=undefined;
	constructor(
		private http: Http,
		private cdr:ApplicationRef
	) { 
		CommonService.instance=this;
	}
	
	static getInstance() {
        if (this.instance) {
            return this.instance;
		} 
		else{
			console.log('%c CommonService_getInstance','background: blue; color: red');
		}
    }

    rgbToHex(r, g, b) {
        r = Number(r);
        g = Number(g);
        b = Number(b);
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
	}




	/**
	 * 排列Array順序
	 * @param array 
	 * @param key 
	 */
    ArraySort(array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];
            return x - y;
        });
	}
	
	/**
	 * Record which page you are currently on
	 * @param flag 
	 */
	setCurrentPage(flag) {
		this.currentpage = flag;
	}

	/**
	 * Return which page you are currently on
	 */
	getCurrentPage() {
		return this.currentpage;
	}


}
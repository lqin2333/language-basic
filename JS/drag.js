function Drag(id){
				var _this = this;
				this.disX = 0;
				this.disY = 0;

				this.oDiv = document.getElementById(id);

				//BE CAREFUL:
				//this.oDiv.onmousedown = this.fnDown(ev)
				//will not work here 
				//because the "this" is different
				//that's why using "_this" here
				this.oDiv.onmousedown = function(ev){
					_this.fnMouseDown(ev);
				}
			}

			Drag.prototype.fnMouseDown = function(ev){
				var _this = this;
				var oEvent = ev || event;
				this.disX = oEvent.clientX - this.oDiv.offsetLeft;
				this.disY = oEvent.clientY - this.oDiv.offsetTop;

				//The same reason as above (this and _this)
				document.onmousemove = function(ev){
					_this.fnMouseMove(ev);
				}
				document.onmouseup = function(ev){
					_this.fnMouseUp(ev);
				}
			}

			Drag.prototype.fnMouseMove = function(ev){
				var oEvent = ev || event;
				this.oDiv.style.left = oEvent.clientX - this.disX + 'px';
				this.oDiv.style.top = oEvent.clientY - this.disY + 'px';
			}

			Drag.prototype.fnMouseUp = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
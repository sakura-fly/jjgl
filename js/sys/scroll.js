//1.设置布局在不同分辨率的宽度问题！
             
             //有滚动条和没有滚动条的是的宽度
			var windomWidth = hasScrollbar()?screen.width-getScrollbarWidth():screen.width;
			//设置body的宽
			document.querySelector("body").style.width = (windomWidth + "px");
			//日志
			console.log("============================关于布局在不同屏幕显示的问题！================================")
			console.log("屏幕的宽度:"+window.innerWidth)
			console.log("浏览器滚动条宽度:"+getScrollbarWidth());
			console.log("body的宽度:"+windomWidth);
			console.log("是否出现滚动条:"+hasScrollbar())
			//问题：是否需要设置main两个div的具体宽度（后期看看要不要写）
			
			function hasScrollbar() { //1.判断浏览器是否出现滚动条
				return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
			}
			function getScrollbarWidth() {//2.计算滚动条宽度的方法
				var scrollDiv = document.createElement("div");
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
				return scrollbarWidth;
			}
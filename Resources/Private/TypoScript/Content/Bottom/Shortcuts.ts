lib.bottom.shortcuts = COA
lib.bottom.shortcuts {
	#10 =< lib.bottom.header
	10 = TEXT
	10 {
		value = Genveje
		wrap = <hgroup><h2>|</h2></hgroup>
	}

	20 = HMENU
	20 {
		special = directory
		special {
        	value = 56
        }
		stdWrap {
			cache {
				key = fdf_leder_bottom_shortcuts
				lifetime = 0
				tags = bottom
			}
		}
		1 = TMENU
		1 {
			wrap = <ul>|</ul>
			expAll = 1
			NO{
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = description // subtitle // title
			}
		}
	}
}
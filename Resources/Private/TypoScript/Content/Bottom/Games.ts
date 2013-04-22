lib.bottom.games = COA
lib.bottom.games {
	#10 =< lib.bottom.header
	10 = COA
	10 {
		wrap = <hgroup>|</hgroup>
		10 = TEXT
		10 {
			value = Troldehovedet
			wrap = <h2>|</h2>
		}
		20 = TEXT
		20 {
			value = Tonseleg
			wrap = <h3>|</h3>
		}
	}

	20 = TEXT
	20 {
		wrap = <p>|</p>
		value = Lege
		cache {
			key = fdf_leder_bottom_games
			lifetime = 360
			tags = games
		}
	}

	30 = TEXT
	30 {
		value = Legedatabasen
		wrap = <p class="right">|</p>
		typolink {
			parameter = 2
			ATagParams = class="arrow"
		}
	}
}
<form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div class="input-group">
		<input type="search" class="form-control" placeholder="Buscar..." value="<?php echo get_search_query(); ?>" name="s" />
		<span class="input-group-btn">
			<button class="btn btn-default" type="submit">
				<span class="glyphicon glyphicon-search"></span>
			</button>
		</span>
	</div>
</form>

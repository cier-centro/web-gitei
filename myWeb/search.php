<?php include (TEMPLATEPATH. '/header2.php'); ?>

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-9">
      <div class="row">
        <div class="col-xs-12">
          <div class="vertical-item ">
              <div class="item-text">
									<?php if ( have_posts() ) : ?>
										<h1 class="title"><?php echo('Resultados de búsqueda para: '. esc_html( get_search_query() )); ?></h1>
										<div class="home-articles">

												<?php
												// Start the loop.
												while ( have_posts() ) : the_post();

													/**
													 * Run the loop for the search to output the results.
													 * If you want to overload this in a child theme then include a file
													 * called content-search.php and that will be used instead.
													 */
													get_template_part( 'template-parts/content', 'search' );

												// End the loop.
												endwhile;

												// Previous/next page navigation.
												the_posts_pagination( array(
													'prev_text'          => __( 'Previous page', 'myWeb' ),
													'next_text'          => __( 'Next page', 'myWeb' ),
													'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'myWeb' ) . ' </span>',
												) );

											// If no content, include the "No posts found" template.
											else :?>

											<div class="home-articles">
											<h1 class="title"><?php echo('Nada encontrado con: '. esc_html( get_search_query() )); ?></h1>
												
											<?php get_template_part( 'template-parts/content', 'none' );

											endif;
											?>
										</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	<?php get_sidebar(); ?>
	<?php get_footer(); ?>

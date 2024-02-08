window.addEventListener('scroll', revealTimelineItems);

function revealTimelineItems() {
    var timelineItems = document.querySelectorAll('.timeline-item');
    for (var i = 0; i < timelineItems.length; i++) {
        var timelineItem = timelineItems[i];
        var itemTop = timelineItem.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (itemTop < windowHeight) {
            timelineItem.classList.add('visible');
        }
    }
}
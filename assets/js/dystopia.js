const START_DATE = new Date(2025, 8, 1)
const END_DATE = new Date(2025, 8, 10)
const TOTAL_DAYS = (END_DATE - START_DATE) / (1000 * 3600 * 24)


const DYSTOPIA = {
    revealArtists: () => {
        let currentDate = new Date()
        currentDate.setHours(0, 0, 0, 0)
        let currentDayCount = (currentDate - START_DATE) / (1000 * 3600 * 24)
        let allArtists = document.getElementById('artistGrid').children
        let finalDayOrLater = currentDate >= END_DATE

        if (finalDayOrLater) {
            for (let artist of allArtists) {
                artist.classList.remove('spoiler')
            }
        } else {
            for (let i = 0; i < allArtists.length; i++) {
                console.log(i)
                console.log(allArtists[i])
                if ((i % TOTAL_DAYS) <= currentDayCount) {
                    allArtists[i].classList.remove('spoiler')
                }
            }
        }

        console.log(currentDayCount + " von " + TOTAL_DAYS)
        console.log(allArtists)
    }
}

DYSTOPIA.revealArtists()
